import { getWaterHistory } from '../../utils/storage';
import'./history.css'
function History() {
    const history = getWaterHistory() || [];

    return (
        <>
        <div className="history-container">
            <div className="history-wrapper">
            <div className="history-title">
                <h1>Water History</h1>
                <span>Track your daily hydration progress</span>
            </div>

            {history.length === 0 ? (
                <p className="no-history">No History Yet</p>
            ) : (
                <div className="table-scroll">
                <table className="history-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th> Day</th>
                        <th> Consumed Amount</th>
                        <th> Completed</th>
                    </tr>
                    </thead>
                    <tbody>
                    {history.map((item, index) => (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.date}</td>
                        <td>{item.consumedAmount}</td>
                        <td>
                            <span className={`badge ${item.completed ? 'done' : 'not-done'}`}>
                            {item.completed ? 'Done' : 'Not Yet'}
                            </span>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            )}
            </div>
        </div>
        </>
    );
}

export default History;
