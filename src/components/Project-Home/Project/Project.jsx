export function Project(prop) {
    return (
        <>
            <div className={"project-container place-self-center p-10 " +
                "gap-5 flex flex-col justify-between bg-amber-50 "}>
                <div className={""}>
                    <img src={"Project1.png"}
                    style={{width: "800px"}}/>
                </div>
                <div className={""}>
                    <div className={"text-black"}>{prop.title}</div>
                    <div className={""}>{prop.desc} </div>
                    <div className={""}>{prop.tags}</div>
                </div>


            </div>
        </>
    )
}