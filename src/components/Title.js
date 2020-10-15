import React from 'react';
import './Title.css'

class Title extends React.Component {

    state = { value: "" }


    render() {
        return <div className="back">
            <h1>To-do List</h1>
            <form className="form" >
                <div className="inputx">
                    <input className="input" type="text" />
                    <button className="btn" >
                        <i className="material-icons" id="add-Icon">
                            add_box
                    </i>
                    </button>
                </div>
            </form>
        </div>


    }
}

export default Title;