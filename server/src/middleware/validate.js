export function validateDateRange(req, res, next) {
  const { from, to } = req.query;
  const errors = [];

  if (from) {
    const fromDate = new Date(from);
    if (isNaN(fromDate.getTime())) {
      errors.push('Invalid "from" date format. Use ISO 8601 (YYYY-MM-DD)');
    }
  }

  if (to) {
    const toDate = new Date(to);
    if (isNaN(toDate.getTime())) {
      errors.push('Invalid "to" date format. Use ISO 8601 (YYYY-MM-DD)');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  next();
}

export function validatePaginationParams(req, res, next) {
  const { limit, offset } = req.query;
  const errors = [];

  if (limit) {
    const l = parseInt(limit, 10);
    if (isNaN(l) || l < 1 || l > 1000) {
      errors.push('limit must be a number between 1 and 1000');
    }
  }

  if (offset) {
    const o = parseInt(offset, 10);
    if (isNaN(o) || o < 0) {
      errors.push('offset must be a non-negative number');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  next();
}

export function validateTag(req, res, next) {
  const { tag } = req.query;
  if (tag) {
    const validTags = ['endurance', 'interval', 'test', 'warmup'];
    if (!validTags.includes(tag)) {
      return res.status(400).json({
        error: 'Invalid tag',
        details: [`tag must be one of: ${validTags.join(', ')}`],
      });
    }
  }
  next();
}

export function validateDistanceRange(req, res, next) {
  const { min_distance, max_distance } = req.query;
  const errors = [];

  if (min_distance) {
    const m = parseInt(min_distance, 10);
    if (isNaN(m) || m < 0) {
      errors.push('min_distance must be a non-negative number');
    }
  }

  if (max_distance) {
    const m = parseInt(max_distance, 10);
    if (isNaN(m) || m < 0) {
      errors.push('max_distance must be a non-negative number');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  next();
}
