if github.branch_for_base == "production" && github.branch_for_head != "development"
  fail "The development branch is the only branch that can merge into production"
end

if github.branch_for_base == "development" && github.branch_for_head == "production"
  fail "You cannot merge production into development branches"
end

if github.branch_for_base == "production"
  if !git.diff_for_file("release_notes.txt")
    fail 'You did not update the release notes'
  end
end

