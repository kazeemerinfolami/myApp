import React, { useEffect, useState } from "react";
import axios from "axios";
import BarCharts from "../components/charts/BarCharts";
import Table from "../components/Table";

async function getSector() {
  try {
    const url = "http://substantiveresearch.pythonanywhere.com/";
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const Index = () => {
  const [allCoreSectors, setGetAllCoreSectors] = useState([]);
  const [sectorsData, setSectorsData] = useState({
    label: [2, 3, 4], //Remove duplicates by sector_name from the coresectors
    dataset: [],
  });

  //Get all core sectors
  useEffect(() => {
    (async () => {
      const sectors = await getSector();
      setGetAllCoreSectors(sectors);
    })();
  }, []);

  useEffect(() => {
    setSectorsData(allCoreSectors);
  }, [allCoreSectors]);

  useEffect(() => {
    const ids = allCoreSectors.map((o) => o.sector_id);
    const filtered = allCoreSectors.filter(
      ({ sector_id }, index) => !ids.includes(sector_id, index + 1)
    );
    setSectorsData({ ...sectorsData, label: filtered, dataset: [] });

    console.log(sectorsData.label);
  }, [allCoreSectors]);

  return (
    <div className="container">
      <nav>R&M-SECtors</nav>
      <main>
        <Table
          className="page-content-wrapper"
          allCoreSectors={allCoreSectors}
        />
        {/* <BarCharts className="page-content-wrapper" sectorsData={sectorsData} /> */}
      </main>
    </div>
  );
};

export default Index;
