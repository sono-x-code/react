import React, { Component } from 'react';



class Counter extends Component {
    state = { 
        count: 0,
        tags: [ 'tag1', 'tag2', 'tag3']
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = ( product ) => {
        this.setState({ count: this.state.count + 1 })
    };

    render() {
        let badgeClasses = this.getBadgeClasses();
        
        return ( 
            
            <div className='m-3'>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={ () => this.handleIncrement( "product" ) } className='btn btn-sm btn-secondary'>
                    increment 
                </button>
            </div> 
        )
    }

    

    getBadgeClasses() {
        let badgeClasses = 'badge m-2 bg-';
        badgeClasses += this.state.count === 0 ? 'warning text-dark' : 'primary text-light';
        return badgeClasses;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero' : count;
    }
}


export default Counter; 






// class Counter extends Component {
//     state = { 
//         count: 1,
    
//         tags: [ 'tag1', 'tag2', 'tag3']
//     };

//     renderTags() {
//         if ( this.state.tags.length === 0 ) return <p> There are no tags </p>;

//         return <ul>
//         { this.state.tags.map( tag => <li key={ tag }> { tag } </li>) }
//         </ul>
//     }

//     render() {
        
//         return ( 
//             <div className='m-3'>
//                 { this.state.tags.length === 0 && "Please create a new tag!" }
//                 { this.renderTags() }
//             </div> 
//         )
//     }

// }