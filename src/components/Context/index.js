import React, { Component }from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

    state = {
        players: [
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ]
    };

    // player id counter
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            return {
                score: prevState.players[index].score += delta
            };
        });
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: prevState.players.concat({
                    name,
                    score: 0,
                    id: this.prevPlayerId += 1
                })
            }
        });
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    getHighScore = () => {
        const scores = this.state.players.map(player => player.score);
        const highScore = Math.max(...scores);
        return highScore
            ? highScore
            : null;
    }

    render() {
        const providerValue = {
            players: this.state.players,
            highScore: this.getHighScore(),
            actions: {
                changeScore: this.handleScoreChange,
                removePlayer: this.handleRemovePlayer,
                addPlayer: this.handleAddPlayer
            }
        };
        return (
            <ScoreboardContext.Provider value={providerValue}>
                {this.props.children}
            </ScoreboardContext.Provider>
        );
    }
}

export const Consumer = ScoreboardContext.Consumer;

