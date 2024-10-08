package com.sgt.hrisportal.web;
import com.sgt.hrisportal.service.AttendanceService;
import com.sgt.hrisportal.service.userService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowCredentials = "true")
public class AttendanceResource {
    @Autowired
    AttendanceService attendanceService;

    @PostMapping("/attendance")
    public Map<String, Object> markAttendance() {
        return attendanceService.markAttendance();
    }

    @PostMapping("/getHolidays")
    public List<Map<String, Object>> getNationalHolidays(@RequestBody Map<String, Object> body) {
        return attendanceService.getNationalHolidays(body);
    }
}


