import React from 'react'
import Grid from '../template/grid';
import IconItem from './IconItem'


export default props => {
    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' 
                    placeholder='Add task' value={props.description} onChange={props.handleChange}></input>

            </Grid>
            <Grid cols='12 3 2'>
                <IconItem type='primary' icon='plus' onClick={props.addHandle}></IconItem>
            </Grid>

        </div>
    );
}

