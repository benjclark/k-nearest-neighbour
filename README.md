# k-nearest-neighbour

Machine Learning in JS: k-nearest-neighbor

I think the best way to teach the kNN algorithm is to simply define what the phrase "k-nearest-neighbor" actually means.

We're going to plot the data points for flats and apartments on a graph in two dimensions, using, e.g. number of rooms, as the x-axis and, e.g. the area, as the y-axis.

When we inevitably run into a new, unlabeled data point ("mystery point"), we'll put that on the graph too. Then we'll pick a number (called "k") and just find the "k" closest points on the graph to our mystery point. If the majority of the points close to the new point are "flats", then we'll guess that our mystery point is a flat.

That's what k-nearest-neighbor means. "If the 3 (or 5 or 10, or 'k') nearest neighbors to the mystery point are two apartments and one house, then the mystery point is an apartment."

Here's the (simplified) procedure:

- Put all the data you have (including the mystery point) on a graph.
- Measure the distances between the mystery point and every other point.
- Pick a number. Three is usually good for small data sets.
- Figure out what the three closest points to the mystery point are.
- The majority of the three closest points is the answer.


Important things to remember about creating a kNN:

- You need to normalise your data (e.g. each set of data becomes a scale between 0 and 1) to cater for scale discrepancies and allow kNN to measure everything on level playing field.
..- you don't need to scale things evenly (into a square) like I described above. If area is more important to the problem than the number of rooms, you can scale those two features differently. This is called "weighting", and gives more importance to one feature or another.  
