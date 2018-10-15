import React from 'react';
import styles from '../../styles/Workout.css';

const Workout = () => (
  <div>
    <table className={styles.workout}>
      <tr>
        <th>reps</th>
        <th>sets</th> 
        <th>weight</th>
      </tr>

      <tr>
        <td>4</td>
        <td>5</td>
        <td></td>
      </tr>

      <tr>
        <td>4</td>
        <td>5</td>
        <td></td>
      </tr>

      <tr>
        <td>4</td>
        <td>5</td>
        <td></td>
      </tr>

      <tr>
        <td>3</td>
        <td>10</td>
        <td></td>
      </tr>

      <tr>
        <td>3</td>
        <td>10</td>
        <td></td>
      </tr>

      <tr>
        <td>3</td>
        <td>10</td>
        <td></td>
      </tr>

      <tr>
        <td>3</td>
        <td>10</td>
        <td></td>
      </tr>  
    </table>
  </div>
)

export default Workout;