import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './Context';
import Counter from './Counter';
import HighScoreIcon from './HighScoreIcon';

class Player extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        score: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        isHighScore: PropTypes.bool.isRequired
    };

    render() {
        const {
            name,
            id,
            score,
            index,
            isHighScore
        } = this.props;

        return (
            <Consumer>
                {context => {
                    return (
                        <div className="player">
                            <span className="player-name">
                                <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
                                <HighScoreIcon isHighScore={isHighScore} />
                                { name }
                            </span>
                            <Counter
                                score={score}
                                index={index}
                            />
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Player;