import React, { Component } from 'react';
import styles from './styles.module.scss';
import {connect} from 'react-redux';

class Ind extends Component{ 
    constructor(props){
        super(props);
        this.state= {
            
        }
    }
    render(){  
        return (            
            <div>
                <div className={styles.input}>{this.props.count}</div>    
            </div>        
        )
    }    
}

const mapStateToProps = state=>({
    count: state.appReducer.count
})
export default connect(mapStateToProps)(Ind)