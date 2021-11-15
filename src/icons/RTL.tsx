import { SvgIcon, SvgIconProps } from "@mui/material";

const RTL = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 16 14" fill="none" {...props}>
      <path d="M20.5,7H3.5A.5.5,0,0,1,3,6.5v-1A.5.5,0,0,1,3.5,5h17a.5.5,0,0,1,.5.5v1A.5.5,0,0,1,20.5,7Zm.5,5.5v-1a.5.5,0,0,0-.5-.5H9.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11A.5.5,0,0,0,21,12.5Zm0,6v-1a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h5A.5.5,0,0,0,21,18.5Z" />
    </SvgIcon>
  );
};

export default RTL;
