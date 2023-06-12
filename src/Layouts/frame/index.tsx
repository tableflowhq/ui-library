import Box from "../../Box";
import style from "./style/Frame.module.scss";

export default function Frame({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <Box>{children}</Box>
            </div>
        </div>
    );
}
