import pytest
from src.python.utils import get_config, validate_input

def test_get_config():
    config = get_config()
    assert config['debug'] == True
    assert config['version'] == '1.0.0'

def test_validate_input():
    assert validate_input({}) == True
    assert validate_input([]) == False