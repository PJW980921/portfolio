package com.guestbook.controller;

import com.guestbook.dto.request.GuestBookWriteRequest;
import com.guestbook.service.GuestBookService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Tag(name = "guestbook controller api", description = "밤명록에 사용되는 API")
@RequestMapping(value = "/guestbook")
public class GuestBookController {
    @Autowired
    private GuestBookService guestBookService;
    @PostMapping(value = "/write")
    @ApiResponses(
            @ApiResponse(
                    responseCode = "200"
            )
    )
    @Operation(summary = "새로운 피드를 생성합니다.")
    public ResponseEntity<?> writeGuestBook(@RequestBody GuestBookWriteRequest guestBookWriteRequest) {
        guestBookService.writeGuestBook(guestBookWriteRequest);
        return ResponseEntity.ok("성공");
    }
}
