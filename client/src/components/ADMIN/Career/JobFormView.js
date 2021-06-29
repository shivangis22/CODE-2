import React from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import careerRoutes from "./careerRoutes";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Row,
  Col,
  Form,
} from "reactstrap";
import EditorComponent from "../../Editor/Editor";
const JobFormView = React.forwardRef(
  (
    {
      eventName,
      setEventName,
      eventType,
      setEventType,
      entryFee,
      setEntryFee,
      startsOn,
      setStartsOn,
      endsOn,
      setEndsOn,
      duration,
      setDuration,
      venue,
      setVenue,
      description,
      setDescription,
      handleTagChange,
      handleSubmit,
      tags,
      bannerUrl,
      cardImgUrl,
      editorState,
      setEditorState,
      ...props
    },
    { bannerImgRef, cardImgRef }
  ) => {
    return (
      <DashboardLayout routes={careerRoutes}>
        <Card className="add-events-card">
          <CardHeader>
            <CardTitle>
              <h5>{props.action}</h5>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Row style={{ width: "100%", marginLeft: 0 }}>
                <Col md="4">
                  <FormGroup>
                    <label htmlFor="eventName" className="fontType">
                      Job Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      placeholder="Job Title"
                      id="jobTitle"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <label htmlFor="eventType" className="fontType">
                      Department
                    </label>
                    <select
                      className="form-control"
                      type="text"
                      id="department">
                      <option value="">Department</option>
                      <option value="Android">Android</option>
                      <option value="Blockchain">Blockchain</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="IOT">IOT</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Web Development">Web Development</option>
                    </select>
                  </FormGroup>
                </Col>

                <Col md="4">
                  <FormGroup>
                    <label htmlFor="entryFee" className="fontType">
                      Work Type
                    </label>
                    <select
                      className="form-control"
                      type="text"
                      id="workType">
                      <option value="">Work Type</option>
                      <option value="Internship">Internship</option>
                      <option value="Full Time">Full Time</option>
                      
                    </select>
                  </FormGroup>
                </Col>

              </Row>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Row style={{ width: "100%", marginLeft: 0 }}>

                <Col md="4">
                  <FormGroup>
                    <label htmlFor="entryFee" className="fontType">
                      Remote/Office
                    </label>
                    <select
                      className="form-control"
                      type="text"
                      id="remote">
                      <option value="Office">Office</option>
                      <option value="Remote">Remote</option>                     
                    </select>
                  </FormGroup>
                </Col>

                  <Col md="4">
                    <FormGroup>
                      <label htmlFor="startingDate" className="fontType">
                        Apply By
                      </label>
                      <KeyboardDatePicker
                        margin="0"
                        id="applyBy"
                        label=""
                        format="dd/MM/yyyy"
                        className="form-control"
                      />
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <label htmlFor="duration" className="fontType">
                        Duration
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Duration"
                        id="duration"
                      />
                    </FormGroup>
                  </Col>

                </Row>

                <Row style={{ width: "100%", marginLeft: 0 }}>
                <Col md="4">
                    <FormGroup>
                      <label htmlFor="duration" className="fontType">
                        Stipend
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Stipend"
                        id="stipend"
                      />
                    </FormGroup>
                </Col>

                <Col md="4">
                    <FormGroup>
                      <label htmlFor="duration" className="fontType">
                        Total Openings
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Total Openings"
                        id="totalOpenings"
                      />
                    </FormGroup>
                  </Col>

                  <Col md="4">
                  <FormGroup>
                    <label htmlFor="tags" className="fontType">
                      Skills
                    </label>
                    <Tags
                      placeholder="Enter skill and press enter"
                      className="form-control"
                      value={tags.join(", ")}
                      onChange={(e) => handleTagChange(e.detail.value)}
                    />
                  </FormGroup>
                  </Col>
                </Row>
              </MuiPickersUtilsProvider>

              
              <Row style={{ width: "100%", marginLeft: 0 }}>
                <Col md="12">
                  <FormGroup>
                    <label htmlFor="details" className="fontType">
                      Details
                    </label>
                    <EditorComponent
                      editorState={editorState}
                      setEditorState={setEditorState}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ width: "100%", marginLeft: 0 }}>
                <Col md="6">
                  <FormGroup>
                    <Button type="file" className="btn" id="add-event">
                      {props.action}
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </DashboardLayout>
    );
  }
);
export default JobFormView;
