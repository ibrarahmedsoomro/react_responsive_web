import React from 'react';
import ReactDOM from 'react-dom';
import  sum,{minus , multiply , divide} from './App';

ReactDOM.render(  
<>

<ol>

<li>Sum of Addtion is {sum(4,6)} </li>
<li>Sum of Minus  is {minus(5,8)} </li>
<li>Sum of multiply is {multiply(5,8)} </li>
<li>Sum of divide is {divide(5,8)} </li>

</ol>
</> ,
  document.getElementById('root')
);

