import { useEffect, useState } from "react";
import ProjectsDate from "../../assets/data/Projects.json";
import ProjectsDetailPage from "../../pages/ProjectsDetailPage";
import "./ProjectsCard.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const ProjectsCard = ({ projects }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  // 카테고리가 바뀔 때만 transition 적용
  useEffect(() => {
    // 기존 카드 숨기기
    setVisibleProjects([]);
    const timeout = setTimeout(() => {
      // 새 카드 보여주기
      setVisibleProjects(projects);
    }, 50);

    return () => clearTimeout(timeout);
  }, [projects]);

  const handleClick = (id) => setSelectedId(id);
  const handleClose = () => setSelectedId(null);

  // 모달 열리면 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = selectedId ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selectedId]);

  return (
    <div className="project-card">
      <ul className="pr-card">
        {projects.map((item) => (
          <li
            key={item.id}
            className={`card-bg ${visibleProjects.includes(item) ? "visible" : ""}`}
            onClick={() => handleClick(item.id)}
          >
            <div
              className={`box-top ${
                String(item.id) === "8" ? "different-card" : ""
              }`}
            >
              {item.image && (
                <div className="card-img1">
                  <img
                    src={require(`../../assets/images/${item.image}`)}
                    alt={item.proname}
                  />
                </div>
              )}
              {item.image2 && (
                <div className="card-img2">
                  <img
                    src={require(`../../assets/images/${item.image2}`)}
                    alt={item.proname}
                  />
                </div>
              )}
            </div>

            <div className="txt-box">
              <div className="txt-top">
                <p className="proname">{item.proname}</p>
                <IoIosArrowForward className="detail" />
              </div>
              <div className="txt-mid">
                <p className="day">{item.day}</p>
                <p className="type2">{item.type2}</p>
              </div>
              <div className="prosub">
                <p>{item.prosub}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedId && (
        <div className="project-modal">
          <div className="modal-content">
            <div className="btn">
              <IoIosClose className="close-btn" onClick={handleClose} />
            </div>
            <ProjectsDetailPage id={selectedId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsCard;
