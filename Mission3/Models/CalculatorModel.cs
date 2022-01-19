using System;
using System.ComponentModel.DataAnnotations;

namespace Mission3.Models
{
    public class CalculatorModel
    {
        [Range(0, 100)]
        public int assignments { get; set; }

        [Range(0, 100)]
        public int groupProject { get; set; }

        [Range(0, 100)]
        public int quizzes { get; set; }

        [Range(0, 100)]
        public int exams { get; set; }

        [Range(0, 100)]
        public int intex { get; set; }
    }
}
