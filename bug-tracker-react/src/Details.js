import React from 'react';

export class Details extends React.Component {
    render() {
        const todos = [
          {title: 'Belajar', asign:'testing'},
          {title: 'Belajar2', asign:'testing2'}
        ]
        return (
          <div className="column is-medium" id="listBugs">
            {todos.map((todo,index)=>{
              return (
                <div key={index} className="card">
                    <header className="card-header">
                        <p className="card-header-title">BugId: {index}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            {todo.title}
                            <span className="tag is-info">{todo.title}</span>
                            <p>Assigned To: {todo.asign}</p>
                        </div>
                        <small className="tag is-primary">{todo.title}</small>
                    </div>
                    <footer className="card-footer">
                        <a className="is-warning card-footer-item">Close</a>
                        <a className="card-footer-item">Delete</a>
                    </footer>
                  </div>
              )
            })}
            </div>

        )
    }
}

// <div class="column is-medium" id="listBugs">
// <div class="card">
//     <header class="card-header">
//         <p class="card-header-title">BugId:
//         </p>
//     </header>
//     <div class="card-content">
//         <div class="content">
//             ${desc}
//             <span class="tag is-info">${severity}</span>
//             <p>Assigned To: ${assignedTo}</p>
//         </div>
//         <small class="tag is-primary">${status}</small>
//     </div>
//     <footer class="card-footer">
//         <a class="is-warning card-footer-item">Close</a>
//         <a class="card-footer-item"></a>Delete</a>
//     </footer>
//   </div>
// </div>
