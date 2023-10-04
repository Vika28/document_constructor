import React, {useContext} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import styles from '../../App.module.css';
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import MainPart from "../../components/mainPart/MainPart";
import {Context} from "../../index";
import CreateDiscipline from "../create-discipline/CreateDiscipline";
import {CreateDocument} from "../create-document/CreateDocument";
import DocumentEditor from "../document-editor/DocumentEditor";

const DashboardPage = () => {
    const navigate = useNavigate();
    const {auth} = useContext(Context);

    useEffect(() => {
        auth.checkUser()
        if (!auth.isAuth) {
            navigate("/");
        }
    }, []);

    return (
         <div className={styles.appWrapper}>
             <div className={styles.app}>
                 <LeftSidebar />
                 <Routes>
                     <Route path={'create-discipline'} element={<CreateDiscipline/>}/>
                     <Route path={'discipline/:disciplineIdParam/create-document'} element={<CreateDocument/>}/>
                     <Route path={'document/:documentId/editor'} element={<DocumentEditor/>}/>
                     <Route path={''} element={<MainPart />} />
                 </Routes>

             </div>
         </div>
    );
};

export default DashboardPage;
