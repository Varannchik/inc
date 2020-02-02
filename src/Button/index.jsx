import React, { Component } from 'react';
import styles from './styles.module.scss';
import {handleInc as handleIncAction} from '../actions/inc'
import {connect} from 'react-redux';


class Btn extends Component{ 
    
    handleClick=()=>{ 
        this.props.handleInc()  
    }

    render(){ 
        return (
            <div>
                <div className={styles.btn} onClick={this.handleClick}>+</div>                
            </div>        
        )
    }    
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInc: () => {dispatch(handleIncAction())}
    }
}

export default connect(null, mapDispatchToProps)(Btn)