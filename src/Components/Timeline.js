import React, { useRef, useEffect } from 'react';
import { select, min, max, scaleTime, scaleLinear, axisBottom, axisRight } from 'd3';
import { useResizeObserver } from './UseResizeObserver';


const Timeline = ({data, highlight}) => {
    const svgRef = useRef()
    const wrapperRef = useRef()
    const dimensions = useResizeObserver(wrapperRef)

    useEffect(() => {
        const svg = select(svgRef.current)
        if(!dimensions) return;

        const minDate = min(data, stamp  => new Date(stamp.StartTime))
        const maxDate = max(data, stamp  => new Date(stamp.StartTime))

        const xScale = scaleTime()
            .domain([minDate, maxDate])
            .range([0, dimensions.width - 24])

        const minTime = min(data, stamp => ( (new Date(stamp.EndTime) - new Date(stamp.StartTime)) / 1000 / 60 ) )
        const maxTime = max(data, stamp => ( (new Date(stamp.EndTime) - new Date(stamp.StartTime)) / 1000 / 60 ) )

        const yScale = scaleLinear()
            .domain([maxTime, 0])
            .range([0, dimensions.height])

        svg.selectAll('.project').data(data)
            .join('line')
            .attr('class', 'project')
            .attr('stroke', p => p.parentProject.Name === highlight ? "blue" : "black" )
            .attr('x1', p => xScale(new Date(p.StartTime)))
            .attr('y1', dimensions.height)
            .attr('x2', p => xScale(new Date(p.StartTime)))
            .attr('y2', p => yScale((new Date(p.EndTime) - new Date(p.StartTime)) / 1000 / 60 ) )


        const xAxis = axisBottom(xScale)
        svg.select(".x-axis")
            .style('transform', `translateY(${dimensions.height}px)`)
            .call(xAxis)

        const yAxis = axisRight(yScale)
        svg.select('.y-axis')
            .style('transform', `translateX(${dimensions.width - 24 }px)` )
            .call(yAxis)

    }, [data, dimensions, highlight]);

    return (
        <div ref={wrapperRef} style={{ marginBottom: "2rem" }} >
            <svg ref={svgRef}>
                <g className="x-axis">

                </g>
                <g className='y-axis'></g>
            </svg>
        </div>
    )
}

export default Timeline;