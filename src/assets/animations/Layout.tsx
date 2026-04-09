"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

const tabs = [
  { label: "Signup" },
  { label: "Signin" },

]

export default function LayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className="w-full h-full rounded-lg bg-white overflow-hidden shadow-xl flex flex-col">
      <nav className="bg-[#fdfdfd] px-2 pt-2 pb-0 h-11 border-b border-[#eee] rounded-t-lg">
        <ul className="flex w-full list-none font-medium text-sm">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor:
                  item === selectedTab ? "#413BD7" : "transparent",
              }}
              onClick={() => setSelectedTab(item)}
              className="relative flex-1 px-4 py-2 h-6 flex items-center justify-between text-[#0f1115] cursor-pointer rounded-t-md select-none"
            >
              {`${item.label}`}
              {item === selectedTab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[var(--accent)]"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      <main className="flex flex-1 justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[128px]"
          >
            {/* {selectedTab?.label || "😋"} */}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

// "use client"

// import * as motion from "motion/react-client"
// import { useState } from "react"

// export default function LayoutAnimation() {
//   const [isOn, setIsOn] = useState(false)

//   const toggleSwitch = () => setIsOn(!isOn)

//   return (
//     <button
//       onClick={toggleSwitch}
//       className={`w-[100px] h-[50px] rounded-full cursor-pointer flex p-2 ${
//         isOn ? "justify-start" : "justify-end"
//       } bg-[hsl(0_0%_90%/.6)]`} // fallback for --hue-3-transparent
//     >
    //   <motion.div
    //     layout
    //     transition={{
    //       type: "spring",
    //       duration: 0.2,
    //       bounce: 0.2,
    //     }}
    //     className="w-[50px] h-[50px] bg-purple-700 rounded-full"
    //   />
//     </button>
//   )
// }

