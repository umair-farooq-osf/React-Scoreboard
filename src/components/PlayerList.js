import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
    return (
        <Consumer>
            {context => {
                return (
                    <React.Fragment>
                        {context.players.map((player, index) =>
                            <Player
                                name={player.name}
                                score={player.score}
                                id={player.id}
                                key={player.id.toString()}
                                index={index}
                                isHighScore={player.score === context.highScore}
                            />
                        )}
                    </React.Fragment>
                );
            }}
        </Consumer>
    );
};

export default PlayerList;