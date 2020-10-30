import React from 'react';
import Item from './Item'

function Items(props) {
    return(
      <table className='table table-bordered'>
          <thead className='thead-dark'>
              <tr>
                  <th className='col-md-auto'>№</th>
                  <th className='col-6'>Name</th>
                  <th className='col-6'>Age</th>
                  <th className='col-md-auto'>Options</th>
              </tr>
          </thead>
        <tbody>{props.alldata.map((elem, index) => 
            <Item 
              data={elem} 
              index={++index} 
              getItems={props.getItems} 
            />
          )}
        </tbody>
      </table>
    )
}

export default Items;