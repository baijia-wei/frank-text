let importAll=(requireContext:any)=> requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('../icons',true,/\.svg$/))
} catch (error){

}