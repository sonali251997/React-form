import React from 'react';
import './Table.css';

const Table = (props) => {
   
  return (
    <article>
    <table style={{marginBottom:'2em'}}>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
       { props.hasEntry && <tr>
            <td aria-describedby="First Name :">{props.userFirstName}</td>
            <td aria-describedby="Last Name :">{props.userLastName}</td>
            <td aria-describedby="email :">{props.userEmail}</td>
            <td aria-describedby="phone :">{props.userPhone}</td>
            <td>
                <input type="button" value="Edit" className='edit' onClick={props.editHandler}/><br></br>
                 <input type="button" value="Delete" className='delete' onClick={props.deleteHandler}/>
            </td>
            
        </tr>}
    </table>
</article>
  )
}

export default Table;
