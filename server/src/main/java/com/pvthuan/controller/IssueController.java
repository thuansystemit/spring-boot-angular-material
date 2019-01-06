package com.pvthuan.controller;

import com.pvthuan.model.Issue;
import com.pvthuan.repository.IssueRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/api")
@Slf4j
public class IssueController {

    private final IssueRepository issueRepository;

    public IssueController(final IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    @GetMapping("issues")
    public Flux<Issue> getAllIssues() {
        log.info("starting getAllIssues................................");
        return issueRepository.findAll();
    }

    @GetMapping("issues/{id}")
    public Mono<ResponseEntity<Issue>> getIssue(@PathVariable("id") String id) {
        log.info("starting getIssue................................");
        return issueRepository.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("issues")
    public Mono<Issue> addIssue(@RequestBody Issue issue) {
        log.info("starting addIssue................................");
        return issueRepository.save(issue);
    }


    @PutMapping("issues/{id}")
    public Mono<ResponseEntity<Issue>> updateIssue(@PathVariable("id") String id, @RequestBody Issue issue) {
        log.info("starting updateIssue................................");
        return issueRepository.findById(id).flatMap(currentIssue -> {
            currentIssue.setTitle(issue.getTitle());
            currentIssue.setCreated_at(issue.getCreated_at());
            currentIssue.setUpdated_at(issue.getUpdated_at());
            currentIssue.setState(issue.getState());
            currentIssue.setUrl(issue.getUrl());
            return issueRepository.save(currentIssue);
        })
                .map(updatedIssue -> new ResponseEntity<Issue>(updatedIssue, HttpStatus.OK))
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("issues/{id}")
    public Mono<ResponseEntity<Void>> deleteIssue(@PathVariable("id") String id) {
        log.info("starting deleteIssue................................");
        return issueRepository.deleteById(id).then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)
        ));
    }

}
