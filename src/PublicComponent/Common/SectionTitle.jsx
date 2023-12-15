/* eslint-disable react/prop-types */

const SectionTitle = ({subHeading,heading}) => {
  return (
    <div className="text-center w-2/4 mx-auto my-20">
        <p className="italic text-yellow-500">- - - {subHeading} - - -</p>
        <hr className="w-2/4 mx-auto text-gray-300 my-5 border border-gray-300"/>
        <h1 className="text-4xl font-normal text-black dark:text-white uppercase">{heading}</h1 >
        <hr className="w-2/4 mx-auto text-gray-300 my-5 border border-gray-300"/>
    </div>
  )
}

export default SectionTitle