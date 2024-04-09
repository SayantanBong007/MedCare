import React from "react";

const page = () => {
  return (
    <div className=" bg-blue-100 h-screen w-[85vw] flex overflow-auto ">
      <div className="p-5 h-full w-1/5 overflow-hidden ">
        <div className="h-full bg-white rounded-lg gap-10">
          <h4 className="text-3xl font-bold flex justify-center items-center pt-10">
            Profile
          </h4>

          <div className="flex flex-col justify-center items-center p-2 pt-10">
            <img
              className="h-50 w-50 bg-green-400 m-5 rounded-md"
              src="/pic.jpg"
              alt="user photo"
            />
            <h5 className="text-2xl font-bold m-5 pt-10">User Details</h5>
          </div>

          <div className="flex justify-start pl-3 flex-col flex-1 gap-8">
            <div className="pt-3">
              <div className="text-sm">Name:</div>
              <div className="font-bold text-xl pt-2">Tanjiro Kamado</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Contact Number:</div>
              <div className="font-bold text-xl pt-2">96842236875</div>
            </div>
            <div className="pt-3">
              <div className="text-sm">Email Id:</div>
              <div className="font-bold text-xl pt-2">tanjiro@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-4/5 p-5 pl-2 ">
        <div className=" bg-white h-full rounded-lg p-14">
          <div className="grid grid-cols-2 grid-rows-2  mt-5 gap-10">
            {boxs.map((box) => (
              <Card>
                <CardHeader className="flex justify-between flex-row">
                  <div>
                    <CardTitle
                      className={cn("text-2xl font-bold", montserrat.className)}
                    >
                      {box.heading}
                    </CardTitle>
                    <CardDescription
                      className={cn(
                        "text-xl font-semibold ",
                        montserrat.className
                      )}
                    >
                      {box.condition}
                    </CardDescription>
                  </div>
                  <div>
                    <CardTitle className="p-2">
                      <span
                        className={
                          (cn("text-2xl font-bold", montserrat.className),
                          cn("h-5 w-5 mr-3", box.color))
                        }
                      >
                        {box.value}
                      </span>
                      <span
                        className={cn(
                          "text-xl font-semibold",
                          montserrat.className,
                          "pl-2"
                        )}
                      >
                        {box.measurement}
                      </span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="w-full">{box.graph}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
