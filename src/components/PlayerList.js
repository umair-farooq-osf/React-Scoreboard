import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = ({ highScore, changeScore, removePlayer }) => {
    return (
        <Consumer>
            {players => {
                return (
                    <React.Fragment>
                        {players.map((player, index) =>
                            <Player
                                name={player.name}
                                score={player.score}
                                id={player.id}
                                key={player.id.toString()}
                                index={index}
                                changeScore={changeScore}
                                removePlayer={removePlayer}
                                isHighScore={player.score === highScore}
                            />
                        )}
                    </React.Fragment>
                );
            }}
        </Consumer>
    );
};

PlayerList.propTypes = {
    highScore: PropTypes.number,
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
};

export default PlayerList;