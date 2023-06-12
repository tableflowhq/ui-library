import style from "./style/Loader.module.scss";
import Tableflow from "../Tableflow";

export default function Loader() {
    return (
        <div className={style.container}>
            <Tableflow size="big" />
        </div>
    );
}
