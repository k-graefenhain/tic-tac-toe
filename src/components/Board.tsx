import React, {Component, ComponentState} from "react";
import {Square} from "./Square";

export class Board extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            xIsNext: true,
            squares: Array(9).fill(null)
        }
    }

    render() {
        return (
            <>
                <div className="board-row">
                    <Square value={this.state.squares[0]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e,0)
                            }}
                    />
                    <Square value={this.state.squares[1]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e, 1);
                            }}
                    />
                    <Square value={this.state.squares[2]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e, 2);
                            }}
                    />
                </div>
                <div className="board-row">
                    <Square value={this.state.squares[3]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e, 3);
                            }}
                    />
                    <Square value={this.state.squares[4]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e, 4);
                            }}
                    />
                    <Square value={this.state.squares[5]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e, 5);
                            }}
                    />
                </div>
                <div className="board-row">
                    <Square value={this.state.squares[6]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e, 6);
                            }}
                    />
                    <Square value={this.state.squares[7]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e, 7);
                            }}
                    />
                    <Square value={this.state.squares[8]}
                            onSquareClick={(e: React.MouseEvent) => {
                                this.handleClick(e, 8);
                            }}
                    />
                </div>
            </>
        );
    }

    // updating the squares state of the board component will re-render the Board and all of its children
    // -> the value prop of the Board with the corresponding index will update from null to 'x'
    handleClick(e: React.MouseEvent, index: number): void {
        console.log("square clicked: " + index);
        if (this.state.squares[index]) {
            return;
        }
        this.onUpdateSquare(index);

        // flip xIsNext
        this.setState((state: ComponentState) => {
            return {
                xIsNext: !state.xIsNext
            }
        })
    }

    private onUpdateSquare(index: number) {
        // state may be updated asynchronously -> use arrow function
        // (see https://legacy.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
        this.setState((state: ComponentState) => {
            const updatedSquares = state.squares.map((item: any, i: number) => {
                if (i === index) {
                    return state.xIsNext ? "x" : "o";
                } else {
                    return item;
                }
            });
            return {
                squares: updatedSquares
            };
        });
    }
}
