// EditableTable.js
import React, { useState } from "react";

function Table() {
  const [data, setData] = useState([
    { id: 1, month1: "Onboarding call", blankColumn1: "", blankColumn2: "" },
    {
      id: 2,
      month1: "Google Search Console Access",
      blankColumn1: "",
      blankColumn2: "",
    },
    {
      id: 3,
      month1: "Google Analytics Access",
      blankColumn1: "",
      blankColumn2: "",
    },
    { id: 4, month1: "Website Access", blankColumn1: "", blankColumn2: "" },
    { id: 5, month1: "Technical Audit", blankColumn1: "", blankColumn2: "" },
    {
      id: 6,
      month1: "Anchor Text and Semantic Analysis",
      blankColumn1: "",
      blankColumn2: "",
    },
    {
      id: 7,
      month1: "Competitor Analysis",
      blankColumn1: "",
      blankColumn2: "",
    },
    {
      id: 8,
      month1: "Anchor Text / Url Mapping",
      blankColumn1: "",
      blankColumn2: "",
    },
    {
      id: 9,
      month1: "Google Data Studio Report + Local Reporting Status",
      blankColumn1: "",
      blankColumn2: "",
    },
    {
      id: 10,
      month1: "Site Level Optimization",
      blankColumn1: "",
      blankColumn2: "",
    },
    {
      id: 11,
      month1: "On Page Optimization",
      blankColumn1: "",
      blankColumn2: "",
    },
    { id: 12, month1: "Content Creation", blankColumn1: "", blankColumn2: "" },
    {
      id: 13,
      month1: "Content Publishing",
      blankColumn1: "",
      blankColumn2: "",
    },
    {
      id: 14,
      month1: "Premium Press Release",
      blankColumn1: "",
      blankColumn2: "",
    },
    {
      id: 15,
      month1: "Authority Niche Placements",
      blankColumn1: "",
      blankColumn2: "",
    },
    { id: 16, month1: "Review Management", blankColumn1: "", blankColumn2: "" },
    { id: 17, month1: "Index Links", blankColumn1: "", blankColumn2: "" },
    { id: 18, month1: "Video Recap", blankColumn1: "", blankColumn2: "" },
  ]);

  const handleEdit = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <>
      <div className="table">
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Month 1</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td
                  className="editable-cell"
                  contentEditable={true}
                  onBlur={(e) =>
                    handleEdit(item.id, "month1", e.target.innerText)
                  }
                >
                  {item.month1}
                </td>
                <td
                  className="editable-cell"
                  contentEditable={true}
                  onBlur={(e) =>
                    handleEdit(item.id, "blankColumn1", e.target.innerText)
                  }
                >
                  {item.blankColumn1}
                </td>
                <td
                  className="editable-cell"
                  contentEditable={true}
                  onBlur={(e) =>
                    handleEdit(item.id, "blankColumn2", e.target.innerText)
                  }
                >
                  {item.blankColumn2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button">
        <button onClick={() => console.log("Data ready to post:", data)}>
          Log Data
        </button>
      </div>
    </>
  );
}

export default Table;
