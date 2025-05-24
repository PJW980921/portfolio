package com.guestbook.service;

import com.guestbook.dto.request.GuestBookWriteRequest;
import com.guestbook.mapper.GuestBookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GuestBookService {
    @Autowired
    private GuestBookMapper guestBookMapper;
    public void writeGuestBook(GuestBookWriteRequest guestBookWriteRequest) {
        guestBookMapper.insertGuestBook(guestBookWriteRequest.nickname(),guestBookWriteRequest.password(),guestBookWriteRequest.description());
    }
}
