import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import observationData from '../data/SessionEngagement';
import StudentActiveLearningData from '../data/StudentActiveLearning';
import StaffActiveLearningData from '../data/StaffActiveLearning';
import Sunburst from './Sunburst';
import newData from '../data/AllData';

const Analysis = () => {
    const [program, setProgram] = useState('');
    const [course, setCourse] = useState('');
    const [obData, setObData] = useState('');
    const [dispaly, setDisplay] = useState(false);

    console.log(
        'selected obj val',
        StudentActiveLearningData.filter(
            item => item.name === '2019-8-26 Data Mining'
        )[0]
    );

    console.log(
        'newdata obj val',
        newData[0].children
            .filter(i => i.name === 'Master of Computer Science')
            .map(item =>
                item.children
                    .filter(k => k.name === 'Machine Learning')
                    .map(j => j.children.filter(l => l.name === '2019-9-5'))
            )[0][0][0]
    );

    // const digram = inputData => (
    //     <div>
    //         <Sunburst id="sunburst" data={inputData} />
    //     </div>
    // );
    return (
        <div className="App">
            <h1>Welcome to the analytic page!</h1>
            {/* {digram(observationData[0])} */}
            {/* <Sunburst id="sunburst" data={newData[0]} /> */}
            <TextField
                select
                label="Select Programs"
                value={program}
                onChange={event => {
                    setProgram(event.target.value);
                    setDisplay(false);
                }}
                margin="normal"
                variant="outlined"
                style={{ marginRight: '25px', width: '35%' }}
            >
                {newData[0].children.map(item => (
                    <MenuItem key={item.name} value={item.name}>
                        {item.name}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Select Course"
                value={course}
                onChange={event => {
                    setCourse(event.target.value);
                    setDisplay(false);
                }}
                margin="normal"
                variant="outlined"
                style={{ marginRight: '25px', width: '35%' }}
            >
                {newData[0].children.filter(i => i.name === program).map(item =>
                    item.children.map(courseName => (
                        <MenuItem key={courseName.name} value={courseName.name}>
                            {courseName.name}
                        </MenuItem>
                    ))
                )}
            </TextField>
            <TextField
                select
                label="Select Observation"
                value={obData}
                onChange={event => {
                    setObData(event.target.value);
                    setDisplay(false);
                    console.log(obData);
                }}
                margin="normal"
                variant="outlined"
                style={{ marginRight: '25px', width: '35%' }}
            >
                {newData[0].children.filter(i => i.name === program).map(item =>
                    item.children.filter(k => k.name === course).map(j =>
                        j.children.map(obName => (
                            <MenuItem key={obName.name} value={obName.name}>
                                {obName.name}
                            </MenuItem>
                        ))
                    )
                )}
            </TextField>
            <br />
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    setDisplay(true);
                }}
            >
                Analyse Data
            </Button>
            {dispaly === true ? (
                <div>
                    <div>
                        <br />
                        <h2>Students and staffs engagement in one session:</h2>
                        <Sunburst
                            id="sunburst1"
                            // data={observationData[0]}
                            data={
                                newData[0].children
                                    .filter(i => i.name === program)
                                    .map(item =>
                                        item.children
                                            .filter(k => k.name === course)
                                            .map(j =>
                                                j.children.filter(
                                                    l => l.name === obData
                                                )
                                            )
                                    )[0][0][0]
                            }
                        />
                    </div>
                    <div>
                        <h2>Students learning activities in one session:</h2>
                        <Sunburst
                            id="sunburst2"
                            data={
                                StudentActiveLearningData.filter(
                                    item => item.name === obData
                                )[0]
                            }
                        />
                    </div>
                    {/* <div>
                        <h2>Staffs teaching activities in one session:</h2>
                        <Sunburst
                            id="sunburst3"
                            data={
                                StaffActiveLearningData.filter(
                                    item => item.name === obData
                                )[0]
                            }
                        />
                    </div> */}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

// function BarChart({ id, data, width = 500, height = 300 }) {
//     useEffect(() => {
//         const svg = d3
//             .select(`#${id}`)
//             .append('svg')
//             .attr('width', width)
//             .attr('height', height)
//             .style('margin-left', 100);

//         svg.selectAll('rect')
//             .data(data)
//             .enter()
//             .append('rect')
//             .attr('x', (d, i) => i * 70)
//             .attr('y', (d, i) => height - 10 * d)
//             .attr('width', 65)
//             .attr('height', (d, i) => d * 10)
//             .attr('fill', 'green');
//     }, []);
//     return <div id={id} />;
// }
export default withRouter(
    connect(state => ({
        save: state.save,
    }))(Analysis)
);

Analysis.propTypes = {
    history: PropTypes.shape({}).isRequired,
};
