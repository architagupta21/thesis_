import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Sunburst = ({ id, data }) => {
    const width = 700;
    const height = 700;
    const radius = Math.min(width, height) / 2;

    const format = d3.format(',d');
    const color = d3.scaleOrdinal(
        // d3.quantize(d3.interpolateRainbow, 111)

        d3.quantize(d3.interpolateRainbow, data.children.length + 1)
    );
    const arc = d3
        .arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius / 2)
        .innerRadius(d => d.y0)
        .outerRadius(d => d.y1 - 1);

    const partition = data =>
        d3.partition().size([2 * Math.PI, radius])(
            d3.hierarchy(data).sum(d => d.value)
            // .sort((a, b) => b.value - a.value)
        );
    const root = partition(data);

    function autoBox() {
        // eslint-disable-next-line react/no-this-in-sfc
        const { x, y, width, height } = this.getBBox();
        return [x, y, width, height];
    }

    useEffect(() => {
        const svg = d3
            .select(`#${id}`)
            .append('svg')
            // .attr('preserveAspectRatio', 'xMinYMin meet')
            // .attr('viewBox', '0 0 300 300')
            // .classed('svg-content', true)
            .style('width', width)
            .style('height', height)
            .style('font', '8px sans-serif')
            .style('margin', '15px');

        svg.append('g')
            .attr('fill-opacity', 0.6)
            .style('width', width)
            .style('height', height)
            .selectAll('path')
            .data(root.descendants().filter(d => d.depth))
            .enter()
            .append('path')
            .attr('fill', d => {
                // eslint-disable-next-line no-param-reassign
                while (d.depth > 1) d = d.parent;
                return color(d.data.name);
            })
            .attr('d', arc)
            .append('title')
            .text(
                d =>
                    `${d
                        .ancestors()
                        .map(d => d.data.name)
                        .reverse()
                        .join('/')}\n${format(d.value)}`
            );
        svg.append('g')
            .attr('pointer-events', 'all')
            .attr('text-anchor', 'middle')
            .selectAll('text')
            .data(
                root
                    .descendants()
                    .filter(
                        d => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10
                    )
            )
            .enter()
            .append('text')
            .attr('transform', d => {
                const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
                const y = (d.y0 + d.y1) / 2;
                return `rotate(${x - 90}) translate(${y},0) rotate(${
                    x < 180 ? 0 : 180
                })`;
            })
            // .attr('textLength', '30')
            // .attr('lengthAdjust', 'spacingAndGlyphs')
            .attr('dy', '0.35em')
            .text(d => d.data.name);
        svg.attr('viewBox', autoBox);
    }, []);

    return <div id={id} />;
};

export default Sunburst;
