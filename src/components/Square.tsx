import React, {Component} from "react";
import {useState} from "react";

export interface SquareProps {
    // value: number
}

export class Square extends Component<SquareProps, any> {
    constructor(props: SquareProps) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <button
                className="square"
                onClick={(e: React.MouseEvent) => {this.handleClick()}}
            >
                {this.state.value}
            </button>
        );
    }

    handleClick() {
        // console.log("clicked");
        this.setState({
            value: "x"
        });
    }
}
