import Layer2 from "../../../assets/layer 2.png";
import Layer0 from "../../../assets/layer 0.png";
import Layer3 from "../../../assets/layer 3.png";

export default function Initiatives() {
  return (
    <>
      <div className="key-points">
        <div
          className="points-left"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Layer2}
            alt="Futuristic Vec tor"
            style={{ width: "100px", height: "100px" }}
          />
          <h1>
            Internal Problem <br />
            statements
          </h1>
          <p>
            The stakeholders within the campus
            <br />
            like Verticals Team, Skills Team,
            <br />
            CoE Team, Academics Team etc requiring solutions for the problems
            existing in the campus.
          </p>
        </div>
        <hr />
        <div
          className="points-center "
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Layer0}
            alt="Ingenious Vector"
            style={{ width: "100px", height: "100px" }}
          />
          <h1>Open Innovation category</h1>
          <p>
            To submit innovative ideas that can be implemented within our
            campus.
          </p>
        </div>
        <hr />
        <div
          className="points-right"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Layer3}
            alt="Empowering Vector"
            style={{ width: "100px", height: "100px" }}
          />
          <h1>Real World Problems</h1>
          <p>
            Problem statements will be shared from variuos departments of TN.
          </p>
        </div>
      </div>
    </>
  );
}
