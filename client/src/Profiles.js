import React from "react";

export default function profiles({ Leaderboard }) {
    return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
    )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" ket={index}>
                        <div className="info">
                            <h3 className="id">{value.id}</h3>
                            <h3 className="name">{value.name}</h3>
                        </div>
                        <div className="score">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

    )
};