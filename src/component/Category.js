import React from "react";
import { Row, Button, Col } from "react-bootstrap";
import "../App.css";

const Category = ({ filterbyCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  return (
    <Row>
      <Col sm="12" className="d-flex justify-content-center pt-3">
        {allCategory.length >= 1 ? (
          allCategory.map((cat) => {
            return (
              <>
                <Button
                  onClick={() => onFilter(cat)}
                  variant="primary"
                  className=" mx-1"
                >
                  {cat}
                </Button>
              </>
            );
          })
        ) : (
          <h3> There no categories </h3>
        )}
      </Col>
    </Row>
  );
};
export default Category;
