import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Style from "./styles.module.css";
import axios from "axios";
const MyForm = ({ clinics, setClinics }) => {
  const id = useRef(5);

  const [show, setShow] = useState(false);

  const [values, setValues] = useState({
    specialty: "",
    name: "",
    img: "",
    location: "",
  });

  const [clinic, setClinic] = useState({
    id: id.current++,
    specialty: "",
    name: "",
    img: "https://static.bookinghealth.com/uploads/clinics/gallery/m/4498-1408-otr_Depositphotos_316360964_xl-2015-1.jpg",
    doctors: 0,
    rate: 0,
    status: false,
    income: {
      avg: 0,
      everyMonth: [
        { month: "jan", income: 0 },
        { month: "feb", income: 0 },
        { month: "mar", income: 0 },
        { month: "mar", income: 0 },
        { month: "april", income: 0 },
        { month: "jun", income: 0 },
        { month: "jul", income: 0 },
      ],
    },
    location: "",
  });

  const handelChange = (value, key) => {
    setClinic({ ...clinic, [key]: value });
  };

  const handelClick = () => {
    if (values.location === "" || values.name === "") {
      setShow(true);
    } else {
      setClinics([clinic, ...clinics]);
      var Data = {
        name: values.name,
        speciality: values.specialty,
        location: values.location,
        image: values.img,
      };
      axios
        .post("http://localhost/backend/web/add_clinic.php", Data)
        .then((response) => response.data)
        .then((json) => {
          console.log(json);
        })
        .catch((error) => console.error(error))




    }
    setValues({ specialty: "", name: "", img: "", location: "" });
  };

  return (
    <div className={Style.container}>
      <h3>Add new Clinic</h3>
      <div className={Style.inputContainer}>
        <Form.Label htmlFor="Name">Name</Form.Label>
        <Form.Control
          id="Name"
          type="text"
          size="sm"
          value={values.name}
          onChange={(e) => {
            setValues({ ...values, name: e.target.value });
            handelChange(e.target.value, "name");
          }}
        />
      </div>
      <div className={Style.inputContainer}>
        <Form.Label htmlFor="Name">Specialty</Form.Label>
        <Form.Control
          id="Name"
          type="text"
          size="sm"
          value={values.specialty}
          onChange={(e) => {
            setValues({ ...values, specialty: e.target.value });
            handelChange(e.target.value, "specialty");
          }}
        />
      </div>

      <div className={Style.inputContainer}>
        <Form.Label htmlFor="Location">Location</Form.Label>
        <Form.Control
          id="Location"
          type="text"
          size="sm"
          value={values.location}
          onChange={(e) => {
            setValues({ ...values, location: e.target.value });
            handelChange(e.target.value, "location");
          }}
        />
      </div>
      <div className={Style.inputContainer}>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload Picture</Form.Label>
          <Form.Control
            type="file"
            size="sm"
            value={values.img}
            onChange={(e) => {
              setValues({ ...values, img: e.target.value });
              handelChange(e.target.value, "img");
            }}
          />
        </Form.Group>
      </div>
      <div className={Style.button}>
        <Button variant="success" size="sm" onClick={() => {
          handelClick();
          // var Data = {
          //   name: values.name,
          //   speciality: values.specialty,
          //   location: values.location,
          //   image: values.img,
          // };
          // axios
          //   .post("http://localhost/backend/web/add_clinic.php", Data)
          //   .then((response) => response.data)
          //   .then((json) => {
          //     console.log(json);
          //   })
          //   .catch((error) => console.error(error))

        }}>
          Add

        </Button>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Can't Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill the inputs</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
            }}
          >
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyForm;
