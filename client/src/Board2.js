import React from "react";
import PropTypes from "prop-types";
// proptypes is a react library that allows you to define types for our props

const Board2 = ({ database }) => {
    const { id, username, score } = database;
    return (
        <tbody role="table">
            <tr>
                <td className="info">{id}</td>
                <td className="info">{username}</td>
                <td className="info">{score}</td>
            </tr>
        </tbody>
    )
};

Board2.propTypes = {
    database: PropTypes.object.isRequired
};

export default Board2;