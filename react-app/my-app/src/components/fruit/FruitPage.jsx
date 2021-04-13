import { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fruitApi } from "../misc/FruitApi";
import { FruitList } from "./FruitList";


export function FruitPage() {

  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fruitApi.getFruits(localStorage.getItem('react-token'))
      setFruits(result.data);
    };
    fetchData();
  }, []);

  let handleDeleteFruit = ({ fruitId }) => {
    console.log("usao delete " + fruitId)
      (async () => {
        let response = await fruitApi.deleteFruit(fruitId, localStorage.getItem('react-token'))
          .then(response => response.json())
      })();
  }

  return <div className="Content">
    <div>
      <h3>Fruit list</h3>
      <FruitList
        data={fruits}
      />
    </div>
  </div>
}

export default FruitPage;

