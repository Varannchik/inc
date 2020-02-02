import React, { Component } from 'react';
import styles from './styles.module.scss';
import {handleDec as handleDecAction} from '../actions/dec'
import {connect} from 'react-redux';


class BtnDec extends Component{     
    handleClick=()=>{ 
        this.props.handleDec()  
    }
    render(){ 
        return (
            <div>
                <div className={styles.btn} onClick={this.handleClick}>-</div>                
            </div>        
        )
    }    
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleDec: () => {dispatch(handleDecAction())}
    }
}
export default connect(null, mapDispatchToProps)(BtnDec)