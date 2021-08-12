package com.sfm.sfmbackend.Controller;

import java.util.Date;

import com.sfm.sfmbackend.Vo.APIerror;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;


@ControllerAdvice
public class GlobalExceptionHandler 
{
    @ExceptionHandler(value={RuntimeException.class})
	public ResponseEntity<APIerror> handleRtException(RuntimeException ex,WebRequest req)
	{
		 APIerror apiErr = new APIerror();
	        apiErr.setMessage("Records empty");
	        apiErr.setCategory("General RunTime Exception");
            apiErr.setTs(new Date());
	        System.err.println("Error Occured..." + ex.toString());    
	        ex.printStackTrace();

	        return new ResponseEntity<APIerror>(apiErr,HttpStatus.BAD_REQUEST);
		
	}

    @ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> errHandle(MethodArgumentNotValidException ex){
		APIerror apiErr = new APIerror();
        apiErr.setMessage(ex.getBindingResult().getFieldError().getDefaultMessage());
        apiErr.setCategory("Validation Error");
        apiErr.setTs(new Date());
        // System.err.println("Error Occured..." + );    
        ex.printStackTrace();

        return new ResponseEntity<APIerror>(apiErr,HttpStatus.BAD_REQUEST);
		
	}
 }
