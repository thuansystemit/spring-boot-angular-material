package com.pvthuan.repository;

import com.pvthuan.model.Issue;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends ReactiveCrudRepository<Issue, String> {
}
