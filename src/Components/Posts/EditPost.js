import styled from "styled-components";

export default function EditPost(){
    function teste(){
        alert("opa");
    }
    
    return (
        <>
        
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={teste}  >
            <path d="M12.9735 0.898646L16.09 4.02665C16.619 4.55565 16.573 5.45265 16.1245 5.91265L6.91301 15.1356L0.519012 16.4696L1.85301 10.0526C1.85301 10.0526 10.593 1.27815 11.0415 0.818146C11.49 0.369646 12.4445 0.369646 12.9735 0.898646ZM9.83401 4.10715L3.40551 10.5586L4.68201 11.8351L11.053 5.33765L9.83401 4.10715ZM6.41851 13.5716L12.8355 7.13165L11.605 5.88965L5.17651 12.3296L6.41851 13.5716Z" fill="white"/>
        </svg>
        </>
    );
}
